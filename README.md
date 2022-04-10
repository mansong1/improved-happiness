# Gesture Recognition React Application

[![Quality Gate Status](http://35.189.72.203:9000/api/project_badges/measure?project=GestureRecognition&metric=alert_status)](http://35.189.72.203:9000/dashboard?id=GestureRecognition)

App is at <https://mansong.ff-demo.co.uk>

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Libraries

`npm install @tensorflow/tfjs @tensorflow-models/handpose react-webcam`

`npm install fingerpose`

`npm install styled-components`

## What is a Harness Folder?

Harness folder allows to save the Harness configurations like pipelines, connectors, delegates, trigger, etc alongside with the code in your git repository.

Harness can either communicate directly via the manger to the Git source or via a delegate.

## Deployment

## Update Packages

Run `npm run update:packages` to update the packages.

## Certficate

We are using [letsencrypt](https://letsencrypt.org/) to get a free SSL certificate for our domain. (<https://mansong.ff-demo.co.uk>).

Certificate is managed by certmanager. (<https://cert-manager.io>)

We use the following manifests to create the certificate and ingress controllers:

- Ingress: manifest/dev/ingress.yaml
- Certifcate: manifests/dev/certificate.yaml
- ClusterIssue: manifest/dev/issuer.yaml

```text

  (  +-----------------+  )
  (  | Ingress (NGINX) |  )
  (  +-----------------+  )
         |                                                     |
         |   +-------------+      +--------------------+       |  +-------+       +-----------+
         |-> | Certificate |----> | CertificateRequest | ----> |  | Order | ----> | Challenge |
             +-------------+      +--------------------+       |  +-------+       +-----------+
                                                               |
```
