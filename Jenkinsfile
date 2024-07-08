pipeline {
    agent any
     environment {
        RENDER_URL = "https://gallery-ew2r.onrender.com/?"
     }
    tools {
        // Using NodeJS plugin to manage Node.js
        nodejs 'NodeJS_18' // Assuming you've configured NodeJS 18 as 'NodeJS_18' in Jenkins
        git 'Default'
    }
 stages {
        stage('Clone the Repo') {
           steps {
        	checkout scm
	    }
        }
        stage('Install Tools') {
            steps {
                script {
                // Install Node.js dependencies
                sh 'npm install'
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
                sh 'nohup node server.js &'
                }
            }
        stage ('Build') {
            steps{
                sh 'echo Deploy the App to Render'
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
