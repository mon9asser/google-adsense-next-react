server {
    listen 443 ssl http2;
    server_name codedtag.com www.codedtag.com;

    ssl_certificate /etc/letsencrypt/live/codedtag.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/codedtag.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Redirect all HTTPS traffic to the new domain
    return 301 https://flatcoding.com$request_uri;
}

server {
    listen 80;
    server_name codedtag.com www.codedtag.com;

    # Redirect all HTTP traffic to HTTPS
    return 301 https://flatcoding.com$request_uri;
}
