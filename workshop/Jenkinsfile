pipeline {
  agent any    
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Pull code') {
      steps {
        checkout scm
      }
    }
    stage('Test') {
      steps {
        sh 'cd workshop && npm install && npm run test'
      }
      post {
        always {
          junit 'workshop/test-reports/*.xml'
        }
      }
    }
    stage('Package') {
      steps {
        script {
          sh 'cd workshop && rm *.tgz'
          sh 'cd workshop && npm pack'
        }
      }
    }
    stage('Deploy') {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
       sshPublisher(publishers: [sshPublisherDesc(configName: 'somkiat-server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''source ~/.profile
nvm install 16.15.1
cd /root/somkiat
pm2 stop somkiat_app
rm -rf package
tar xf workshop-1.0.0.tgz
rm workshop-1.0.0.tgz
cd package
npm install
pm2 start somkiat_app
''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'somkiat', remoteDirectorySDF: false, removePrefix: 'workshop', sourceFiles: 'workshop/*.tgz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
  }
}