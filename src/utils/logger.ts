import winston from 'winston';

const options = {
  file: {
    level: 'info',
    filename: 'logs/app.log',
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD hh:mm:ss A ZZ'
      }),
      winston.format.json()
    )
  },

  console: {
    /**
     * ?Usage of levels: https://stackoverflow.com/questions/34809486/explain-use-of-levels-in-winston-logger
     */
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf((info) => `${info.level}: ${info.message}`)
    )
  }
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false // do not exit on handled exceptions
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new winston.transports.File(options.file));
}

export { logger };
