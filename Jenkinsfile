pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nikita89yadav-byte/n08.git'
            }
        }

        stage('Deploy to AWS') {
            steps {
                sh '''
                scp -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/devo.pem index-aws.html \
                ubuntu@98.91.253.97:/var/www/html/index.html

                ssh -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/devo.pem \
                ubuntu@98.91.253.97 "sudo systemctl restart nginx"
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh '''
                scp -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/Proj1vm_key.pem index-azure.html \
                azureuser@74.235.84.131:/var/www/html/index.html

                ssh -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/Proj1vm_key.pem \
                azureuser@74.235.84.131 "sudo systemctl restart nginx"
                '''
            }
        }
    }
}
