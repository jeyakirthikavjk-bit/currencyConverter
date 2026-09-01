pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jeyakirthikavjk-bit/currencyConverter.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                    if not exist "C:\\ProgramData\\Jenkins\\.jenkins\\UserContent\\currency_converter" mkdir "C:\\ProgramData\\Jenkins\\.jenkins\\UserContent\\currency_converter"
                    xcopy /E /I /Y "dist\\*" "C:\\ProgramData\\Jenkins\\.jenkins\\UserContent\\currency_converter\\"
                '''
            }
        }
    }

    post {
        success {
            echo 'Currency Converter deployed successfully!'
        }

        failure {
            echo 'Currency Converter pipeline failed!'
        }
    }
}