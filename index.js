var android = {
    onReadCardResult_: null,
    startReadCard: function(outtime, onReadCardResult) {
        android.onReadCardResult_ = onReadCardResult;
        java.startReadCard(outtime * 1000);
    },
    readIdCardSuccess: function(people) {
        if (android.onReadCardResult_ != null) {
            android.onReadCardResult_(people);
        }
    },
    onComperaResult_: null,
    startCompera: function(outtime, pic, onComperaResult) {
        android.onComperaResult_ = onComperaResult;
        java.startCompera(outtime * 1000, pic);
    },
    comperaSuccess: function(pic, comperaResult) {
        if (android.onComperaResult_ != null) android.onComperaResult_(pic, comperaResult);
    }
};
