FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all HTML and CSS files
COPY *.html /usr/share/nginx/html/
COPY *.css  /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
