FROM phpdockerio/php72-fpm:latest
WORKDIR "/application"

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install php7.2-mysql \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
# Install download support for GraficLibrary
RUN apt-get update \
    && apt-get -y --no-install-recommends install php7.2-gd \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
# Install git
RUN apt-get update \
    && apt-get -y install git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
# Install Image Support
RUN apt-get update \
    && apt-get -y install php-mbstring \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
# Install Node & Npm
RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_13.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
RUN apt-get update \
    && apt-get -y install supervisor \
    && service supervisor start \
    && supervisorctl update \
    # still got a problem in the image build websockets: ERROR (no such process) but it work mannualy !!
    && supervisorctl start websockets \ 
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
# Install Redis 
#RUN apt-get update \
#&& apt-get -y install gcc make autoconf libc-dev pkg-config \
#&& apt-get install php-pear php-dev \
#&& pecl7.X-sp install redis \
#&& apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
EXPOSE 6001/tcp