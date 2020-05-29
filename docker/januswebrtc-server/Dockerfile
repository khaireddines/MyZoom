FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
# Installing Tools Needed
RUN apt-get update -y \
	&& apt-get -y install aptitude git \
    && aptitude -y install libmicrohttpd-dev libjansson-dev \
	libssl-dev libsrtp2-dev libsofia-sip-ua-dev libglib2.0-dev \
	libopus-dev libogg-dev libcurl4-openssl-dev liblua5.3-dev \
	libconfig-dev pkg-config gengetopt libtool automake
# Installing Dependencies
#RUN git clone https://github.com/sctplab/usrsctp \
#	&& cd usrsctp \
#	&& ./bootstrap \
#	&& ./configure --prefix=/usr \
#	&& make \
#	&& make install
# Installing CMake
RUN apt-get install -y software-properties-common \
	&& add-apt-repository --remove ppa:george-edison55/cmake-3.x \
	&& apt-get update \
	&& apt-get install -y cmake

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
RUN apt-get install -y gtk-doc-tools \
	&& git clone https://gitlab.freedesktop.org/libnice/libnice \
	&& cd libnice \
	&& ./autogen.sh \
	&& ./configure --prefix=/usr \
	&& make \
	&& make install 

# Installing Janus
RUN git clone https://github.com/meetecho/janus-gateway.git \
	&& cd janus-gateway \
	&& sh autogen.sh \
	&& ./configure --prefix=/opt/janus \
	&& make \
	&& make install \
	&& make configs


