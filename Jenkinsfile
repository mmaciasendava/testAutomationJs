pipeline {
    agent { docker { image 'node' } }    
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
    post{
        always { 
            junit allowEmptyResults: true, testResults: 'junit.xml'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '', reportFiles: 'jest_html_reporters.html', reportName: 'HTML Report', reportTitles: 'Jenkins Report'])
        }   
    }
}