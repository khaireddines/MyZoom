realm="acelens.me"
server_name="acelens_turnserver"
user="acelens"
password="acelens"
internalIp="$(ip a | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')"


echo "listening-port=3478
tls-listening-port=5349
listening-ip="$internalIp"
relay-ip="$internalIp"
external-ip=188.165.125.103
realm="$realm"
server-name="$server_name"
lt-cred-mech
userdb=/var/lib/turn/turndb
# use real-valid certificate/privatekey files
cert=/app/ssl/Result/acelens_me_chain.crt
pkey=/app/ssl/acelens.key
relay-threads=1
cli-password=acelens
Verbose"  | tee /etc/turnserver.conf


turnadmin -a -u $user -p $password -r $realm

turnserver 

echo "TURN server running. IP: "$externalIp" Username: $user, password: $password"