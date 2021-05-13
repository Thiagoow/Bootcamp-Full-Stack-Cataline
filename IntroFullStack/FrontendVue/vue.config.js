module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  /*Verifica qual o ambiente rodando E define como publicPath "./" 
  se ambiente de produção, senão, define "/"*/
};
