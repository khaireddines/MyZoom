FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
# Installing Tools Needed
RUN apt-get update -y \
	&& apt-get -y install aptitude git \
	&& aptitude -y install libmicrohttpd-dev libjansson-dev \
	ffmpeg libssl-dev libavcodec-dev libavformat-dev wget libsofia-sip-ua-dev libglib2.0-dev \
	libopus-dev libogg-dev libcurl4-openssl-dev liblua5.3-dev \
	libconfig-dev pkg-config gengetopt libtool automake meson ninja-build

# Installing CMake
RUN apt-get install -y software-properties-common \
	&& add-apt-repository --remove ppa:george-edison55/cmake-3.x \
	&& apt-get update \
	&& apt-get install -y cmake
# Installing Dependencies
RUN wget https://github.com/cisco/libsrtp/archive/v2.2.0.tar.gz \
	&& tar xfv v2.2.0.tar.gz \
	&& cd libsrtp-2.2.0 \
	&& ./configure --prefix=/usr --enable-openssl \
	&& make shared_library \
	&& make install


RUN git clone https://libwebsockets.org/repo/libwebsockets \
	&& cd libwebsockets \
	&& git checkout v2.4-stable \
	&& mkdir build \
	&& cd build \
	&& cmake -DLWS_MAX_SMP=1 -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_C_FLAGS="-fpic" .. \
	&& make \
	&& make install 
# Installing Tools Needed for Documentations
RUN aptitude -y install doxygen graphviz
# Installing LibNice
RUN git clone https://gitlab.freedesktop.org/libnice/libnice.git \
	&& cd libnice \
	&& meson --prefix=/usr build && ninja -C build && ninja -C build install
# Exporting nice.pc
ENV PKG_CONFIG_PATH=/usr/lib64/pkgconfig
# Copy The Library Libnice.so.10 to lib\
RUN cp /lib64/libnice.so.10 /lib/
# Installing Janus
RUN git clone https://github.com/meetecho/janus-gateway.git \
	&& cd janus-gateway \
	&& sh autogen.sh \
	&& ./configure --prefix=/opt/janus --enable-post-processing \
	&& make \
	&& make install \
	&& make configs




