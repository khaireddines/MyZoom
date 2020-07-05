FROM ubuntu:latest
# Task Handler for running Websocket    
RUN apt-get update \
    && apt-get -y install supervisor \
    && service supervisor start \
    && supervisorctl update \
# still got a problem in the image build websockets: ERROR (no such process) but it work mannualy !!
    && supervisorctl start websockets \ 
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
