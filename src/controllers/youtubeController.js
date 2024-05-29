const Youtube=require('../models/youtubeModel');


exports.searchYoutube=async(req,res)=>
{
    const query = req.query.q;
    try {
        const results = await Youtube.searchYouTube(query);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send('Error searching YouTube');
    }
};
exports.getEmbededCode=async (req,res)=>
{
    const url = req.body;
    const embedCode = Youtube.getEmbedCode(url);

    if (embedCode === 'Invalid YouTube URL') {
        res.status(400).send(embedCode);
    
    } 
    res.json(embedCode);
}