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
                ubuntu@ec2-3-88-55-18:/var/www/html/index.html

                ssh -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/devo.pem \
                ubuntu@ec2-3-88-55-18 "sudo systemctl restart nginx"
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh '''
                scp -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/Proj1vm_key.pem index-azure.html \
                azureuser@172.174.130.148:/var/www/html/index.html

                ssh -o StrictHostKeyChecking=no \
                -i /var/lib/jenkins/.ssh/Proj1vm_key.pem \
                azureuser@172.174.130.148 "sudo systemctl restart nginx"
                '''
            }
        }
    }
}
