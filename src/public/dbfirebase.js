
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "lexiland2024.appspot.com",
    databaseURL: "https://lexiland2024-default-rtdb.firebaseio.com"
});


async function  uploadAvatar(avatarFile) {
    try {

        const bucket = admin.storage().bucket();
        const allowedFormats = ['image/png', 'image/jpeg'];
        if (!allowedFormats.includes(avatarFile.mimetype)) {
            return false;
        }
        const fileName = Date.now() + avatarFile.originalname;
        const destination = "avatars/" + fileName;

        await bucket.upload(avatarFile.path, {
            destination: destination,
            metadata: {
                contentType: avatarFile.mimetype
            }
        });

        const [avatarUrl] = await bucket.file(destination).getSignedUrl({
            action: 'read',
            expires: '01-01-2026'
        });
        return avatarUrl;
    } catch (error) {
        console.error('Error uploading avatar:', error);
        return false;
    }
}

module.exports = {
    uploadAvatar
};