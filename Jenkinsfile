pipeline {
    agent any
    environment {
        PATH+EXTRA='C:\/Program Files (x86)\/Jenkins\/workspace\/MyFirstPipeline'
    }
    stages {
        stage('INSTALL') {
            steps {   
                sh label: 'INSTALL', script: 'npm install'
            }
        }
        stage('TESTING'){
            steps {                
                sh label: 'INSTALL', script: 'npm run test'                            
            }
        }
    }
}