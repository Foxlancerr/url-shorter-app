const express = require("express")
const { countRequest, deleteUrl, updateUrl, createNewUrl } = require("../control/urlControl.js")

const router = express.Router()

router.route('/')
    .post(createNewUrl)

router.route('/:id')
    .get(countRequest)
    .delete(deleteUrl)
    .put(updateUrl)

module.exports = router;