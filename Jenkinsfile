pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Check out your source code from GitHub
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']], // Replace with your desired branch
                    userRemoteConfigs: [[
                        url: 'https://github.com/rupeshmohanty/DCP-Product', // Replace with your GitHub repository URL
                        credentialsId: 'rupeshgit' // Replace with your GitHub credentials in Jenkins
                    ]]
                ])
            }
        }

        stage('Install npm packages') {
            steps {
                sh "npm install"
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
            }
        }
        
        stage('Build Docker image'){

            steps {
                echo "Building docker image"
                sh 'ls'
                sh 'docker build -t dcpdocker1/reactimage:${BUILD_NUMBER} .'
            }
        }
        stage('Docker Login'){

            steps {
                 withCredentials([string(credentialsId: 'dcpdocker1', variable: 'Dockerpwd')]) {
                    sh "docker login -u dcpdocker1 -p ${Dockerpwd}"
                }
            }
        }
        stage('Docker Push'){
            steps {
                sh 'docker push dcpdocker1/reactimage:${BUILD_NUMBER}'
            }
        }
        stage('Stop Running Containers') {
            steps {
                sh "docker stop \$(docker ps -q --filter name='react_container') || true"
            }
        }
        stage('Docker deploy'){
            steps {
               sh 'docker run -itd --name react_container${BUILD_NUMBER} -p  8081:8081 dcpdocker1/dcpimage:${BUILD_NUMBER}'
            }
        }
    }
}

