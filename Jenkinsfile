pipeline {
    agent any    
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