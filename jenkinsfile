pipeline {
    agent any
     environment {
        RENDER_URL = "https://stackoverflow.com/"
     }
    tools {
        // Using NodeJS plugin to manage Node.js and npm
        nodejs 'NodeJS_20' // Assuming you've configured NodeJS 20 as 'NodeJS_20' in Jenkins
        git 'Default'
    }

 stages {
        stage('Clone the Repo') {
           steps {
               git 'https://github.com/geekydee/gallery'
           }
        }
        stage('Install Tools') {
            steps {
                script {
                // Install Node.js dependencies
                sh 'npm install'
                sh 'npm install express body-parser mongoose'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
                }
        }
        stage('start server') {
            steps {
                sh 'node server.js'
                }
            }
        stage ('Build'){
            steps{
                sh 'echo Build the App on Heroku'
            }
        }
        stage('Test the App') {
            when {
                expression {
                    return env.BRANCH_NAME == 'test'
                }
            }
            steps {
               echo 'test failed/passed'
            }
        }
        stage ('Deploy to Heroku'){
            steps{
                sh 'echo //Deploy the App'
            }
        }
        //stage('Notify') {
          //  steps {
          //      slackSend color: 'good', message: "Build #${env.BUILD_NUMBER} has been completed succefully. You can View the WebApp on ${RENDER_URL}"
           // }
        //}
    }
    post {
        success {
            script {
                if (currentBuild.currentResult == 'SUCCESS')
                slackSend color: 'good', message: "The Deploment completed successfully: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} (${env.BUILD_URL}). You can View the WebApp on ${RENDER_URL}"
            }
        }
        failure {
            script {
                emailext (
                    subject: "Jenkins Pipeline: ${currentBuild.fullDisplayName} Failed",
                    body: "Something went wrong with ${env.BUILD_URL}, Check the build log for more details."
                )
            }
        }
    }
}
