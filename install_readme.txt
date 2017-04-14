udo apt-get update -y
sudo apt-get install build-essential -y

// nvm & npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
source ~/.profile
nvm install 6.10.1 /* I use nvm install node later and it install another 7.8.0 */
npm install npm -g

// mongo
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update -y
sudo apt-get install -y mongodb-org
/* test mongo shell ok */

// parse
sudo apt-get install git libkrb5-dev -y
mkdir wspace
cd wspace
mkdir parse
cd parse
git clone https://github.com/ParsePlatform/parse-server-example.git .
npm install
npm install parse-dashboard
