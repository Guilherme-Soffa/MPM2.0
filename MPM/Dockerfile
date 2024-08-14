FROM registry.access.redhat.com/ubi8/ubi

RUN yum -y update && \
    yum -y install java-11-openjdk-devel && \
    yum clean all && \
    cd /tmp && \
    curl -O https://downloads.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz && \
    tar -xzvf apache-maven-3.9.6-bin.tar.gz -C /opt && \
    ln -s /opt/apache-maven-3.9.6 /opt/maven && \
    ln -s /opt/maven/bin/mvn /usr/local/bin/mvn && \
    rm -f apache-maven-3.9.6-bin.tar.gz

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]
