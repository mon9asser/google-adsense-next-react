server {
    listen 443 ssl http2;
    server_name codedtag.com www.codedtag.com;

    ssl_certificate /etc/letsencrypt/live/codedtag.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/codedtag.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Reverse proxy to the Next.js app
    location / {
        proxy_pass http://141.136.35.135:7000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name codedtag.com www.codedtag.com;

    # Redirect all HTTP traffic to HTTPS
    return 301 https://codedtag.com$request_uri;
}
