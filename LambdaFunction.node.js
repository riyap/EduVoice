/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to EduVoice';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('BiologyHWIntent', speechText)
      .getResponse();
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hi!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const BiologyHWIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'BiologyHW';
  },
  handle(handlerInput) {
    const speechText = 'Your biology homework is page 88 numbers 6 to 10';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('BiologyHW', speechText)
      .getResponse();
  },
};

const HistoryHWIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HistoryHW';
  },
  handle(handlerInput) {
    const speechText = 'You do not have any history homework';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('HistoryHW', speechText)
      .getResponse();
  },
};

const PrecalcHWIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PrecalcHW';
  },
  handle(handlerInput) {
    const speechText = 'Your precalc homework is the polynomials worksheet';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('PrecalcsHW', speechText)
      .getResponse();
  },
};

const EnglishHWIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EnglishHW';
  },
  handle(handlerInput) {
    const speechText = 'Your english homework is to read Diary of Anne Frank pages 1 to 15';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('EnglishHW', speechText)
      .getResponse();
  },
};

const SportsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'Sports';
  },
  handle(handlerInput) {
    const speechText = 'The basketball tryouts will take place on Sunday, September twenty third. The first basketball game will take place on October tenth. The water polo tryouts will be on Tuesday, September twenty fifth.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Sports', speechText)
      .getResponse();
  },
};

const EnglishClassIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EnglishClass';
  },
  handle(handlerInput) {
    const speechText = 'Today Miss Letap gave an overview of world war two. Then the class had a quick research project on the life of Anne Franke. There was a fire drill, so class was cut short.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('EnglishClass', speechText)
      .getResponse();
  },
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
}; 

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,

    HelloWorldIntentHandler,
    HistoryHWIntentHandler,
    BiologyHWIntentHandler,
    PrecalcHWIntentHandler,
    EnglishHWIntentHandler,
    SportsIntentHandler,
    EnglishClassIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
