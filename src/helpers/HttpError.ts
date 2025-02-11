const messageList: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

type HttpErrorParams = {
  status: number;
  message?: string;
};

class HttpError extends Error {
  status: number;

  constructor(status: number, message: string = messageList[status]) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;
