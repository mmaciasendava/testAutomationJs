pipeline {
    agent any
    stages {
        stage('INSTALL') {
            steps {   
                script {
                    sh 'npm install'
                }                             
            }
        }
        stage('TESTING'){
            steps {
                script {
                    sh 'npm run test'
                }                
            }
        }
    }
}