const request = require('request-promise');

const filtros =
{
    "copyright": "",
    "num_results": 0,
    "results": [
      {
        "abstract": "",
        "byline": "",
        "column": "",
        "count_type": "",
        "geo_facet": "",
        "media": [
          null
        ],
        "published_date": "",
        "section": "",
        "source": "",
        "title": "",
        "url": ""
      }
    ],
    "status": ""
};

function request (section, timeperiod){
    var options = {
        url: "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/{section}/{time-period}.json" + method + ".php",
        json: true
    }

}

