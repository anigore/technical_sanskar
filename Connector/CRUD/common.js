module.exports = {

    responseObj: () => {
        return {
            status: 500,
            message: "error while processing request"
        }
    },

    /* *** MESSAGES *** */

    SAVED_SUCCESS: "data saved successfully",
    SAVED_ERROR: "error in saving data",
    NEWID_ERROR: "error while creating new Id",

    /* *** STATUS CODES *** */

    SUCCESS: 1000,
    ERROR: 1001,
    NOT_FOUND: 2001,
    FORMAT_ERROR:1003


}