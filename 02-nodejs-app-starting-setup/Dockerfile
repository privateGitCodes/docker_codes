# FROM baseImage
FROM node

# WORKDIR /the/workdir/path
# setting the working directory
# all the commands will be executed inside this directory

WORKDIR /app

# COPY . .
# first dot - source - means all the folders and sub folders will be copied into the image
# second dot - dest -  means the path where those files should be stored, 

# COPY . /app
# Now all the folders/sub-folders and files will be copied to the app folder inside the container

COPY . /app

# it will store the files in app because we have set current working directory
# COPY . ./

# RUN command
RUN npm install

# EXPOSE port
EXPOSE 80

# RUN node server.js
# it will not now executed when the image is created
# but when a container is started
# CMD [ "executable" ]
CMD ["node","server.js"]
