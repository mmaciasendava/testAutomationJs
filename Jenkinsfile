pipeline {
    agent any
    stages {
        stage('INSTALL') {
            steps {                
                sh 'npm install'
            }
        }
        stage('TESTING'){
            steps {
                sh 'npm run test'
            }
        }
    }
}