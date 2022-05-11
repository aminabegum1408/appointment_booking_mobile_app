export enum REGEX_CONSTANT {
    ONLY_NUMBER = "^[0-9]*$",
    ONLY_ALPHABETWITHSPACE = "^[a-zA-Z ]*$",
    ONLY_ALPHABET = "^[a-zA-Z]*$",
    ONLY_ALPHANUMERIC = "^[a-zA-Z0-9]*$",
    EMAIL = "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
}
