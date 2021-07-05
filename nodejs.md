1. 셋팅 
- package.json : 프로젝트에 대한 기본 명세서. 모듈, 애플리케이션, 확장 모듈 정보를 담고 있으며, npm으로 생성 가능 
                 명령어 npm init로 자동 생성 [상세](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174371/package-json)
                 package.json만 있어도 npm기능 때문에 패키지를 알아서 설치(필수) >> .gitignore에 node_module에 넣어도 package.json이 있기 때문에 모듈 폴더를 다 올릴 필요 X 
                 main : 배포한 package를 다른 사람들이 설치하면 main으로 사용 
                 scripts : 실행하고 싶은 파일을 지정 >> 실행 : npm run win(key명) 단, 프로젝트 폴더 안에서 실행해야만 함 
                 dependencies : 프로젝트에 필요한 모듈을 명시
                 devDependencies : 개발자에 필요한 모듈 
* [VSC_git_bash_설정](https://velog.io/@westkite/vscode-%ED%84%B0%EB%AF%B8%EB%84%90-Git-bash-%EC%84%A4%EC%A0%95)
* [VSC_git_bash_추가](https://notstop.co.kr/401/)
- 패키지 설치 : npm i/install package 예) npm i express 
               package.json에 dependencies를 알아서 추가하고, 만약에 dependencies에 명시해도 npm이 알아서 설치 
               package.json을 닫거나 저장하고 나서 실행** >> package.json을 저장하지 않고 install하면 버전 충돌 
- express : nodejs 웹 프레임 워크 [상세](https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/Introduction)
            설치 후 사용방법 : main에 import express from "express"; // == const express = require("express"); 임포트 
* npm은 체인처럼 연결된 dependencies를 해석해서 모든 폴더들을 다운 [상세](https://web-front-end.tistory.com/3)
- package-lock.json : 패키지를 안전하게 관리 
- babel : nodejs가 최신의 자바스크립트를 문제없이 이해하도록 변환 >> babel.config.json에 있는 내용을 보고 자동으로 변환 
          preset : 바벨을 위한 엄청 거대한 플러그인. preset-env가 유명하며 react, typescirpt용도 있음 
          [설치및환경설정](https://babeljs.io/setup#installation)
* dependencies를 다르게 설정되어 있다고 하더라도 모든 건 node_modules 폴더에 저장되며 package.json은 텍스트파일이므로 수정 가능  
- nodemon : 파일이 수정되는 걸 감시해주는 패키지 >> 일일이 수정할때마다 npm run ~ 파일 실행할 필요 X 
            [설치](https://babeljs.io/setup#installation)