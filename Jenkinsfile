pipeline {
  agent {
    node {
      label 'build'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'zsh \'npm start\''
      }
    }

  }
}