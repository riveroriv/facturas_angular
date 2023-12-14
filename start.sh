# RUN WITH ROOT PRIVILEGES

docker stop $(docker ps -q)
docker rm $(docker ps -a -q)
\rm -rf facturas_angular

git clone https://github.com/riveroriv/facturas_angular

# cp Dockerfile* facturas_angular/

cd facturas_angular

docker build --rm -t facturas-build -f Dockerfile-build .
docker run -d facturas-build

docker cp $(docker ps -a -q):/app/dist .

docker build --rm -t facturas -f Dockerfile-serve .
docker run -d -p 80:80 facturas

docker ps -a