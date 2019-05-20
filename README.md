# Zagakubot

This repository is meant to serve as a basic example of a bot application
in the Slack service.

The application is very simple: It's a node/express application
which has a single POST endpoint to set up a webhook against the Slack API.

To further enhance the web app and enable distribution to different Slack teams,
it also has a `/oauth` endpoint.

## Getting started

Simply clone the repository, and run the standard:

```
npm install
npm run
```

You should see something along the lines of:

```
> zagakubot@0.1.0 start /Users/you_user/some/directory/zagakubot
> node src/index.js

Example app listening on port 4390
```

## Using ngrok

In order to be able to test the bot locally without deploying it to the cloud, you can use
[ngrok](https://ngrok.com/). Ngrok is a library for tunneling local applications.

To install ngrok you can download it from the official web. In this case, I suggest creating
a symlink so you can access the application from anywhere:
```
# cd into your local bin directory
cd /usr/local/bin

# create symlink
ln -s /Applications/ngrok ngrok
```

In case you're in OSX, it's available in Homebrew:

```
brew cask install ngrok
```

Lasty, as a third option, there is also a package in npm:

```
npm install -g ngrok
```

Once you have ngrok installed, using it is trivial. Simply run `ngrok http [port number]` to tunnel
the application running on the input port. In this specific case, it would be port `4390`.

When we run `ngrok http 4390`,it  will give us a couple of URLs similar to  *https://3cffa067.ngrok.io*.
Those are the ones which we will reference in the Slack API to access our application.

## References

This example has been developed with: https://api.slack.com/tutorials/tunneling-with-ngrok
