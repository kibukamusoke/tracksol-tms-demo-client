### tracksol-tms-demo-client


Terminal Data can viewed here:
https://tracksol-demo.herokuapp.com/


Default Items:
```
1|PPR1|Paper Roll 1|1|
2|PPR2|Paper Roll 2|2|
3|PPR3|Paper Roll 3|3|
4|PPR4|Paper Roll 4|4|
5|PPR5|Paper Roll 5|5|
```

Default Stores:
```
1|WH1|Ware House 1|1|
2|WH2|Ware House 2|2|
3|WH3|Ware House 3|3|
4|WH4|Ware House 4|4|
5|WH5|Ware House 5|5|
```


Default Stock Operations:
```
1|ADD|Add Stock|1|
2|SUBTRACT|Subtract Stock|2|
3|OVERWRITE|Overwrite Stock|3|
```


Sample Terminal Response to Client For Stock Take:

```elixir
{
    "headers": {
      "host": "tracksol-demo.herokuapp.com",
      "connection": "close",
      "content-type": "application/json",
      "charset": "UTF-8",
      "accept": "application/json",
      "user-agent": "Tracksol-Connect-TMS",
      "tms_identity": "playground4",
      "x-request-id": "ca5ea010-c768-4bdd-9583-1504adab9b4d",
      "x-forwarded-for": "47.254.201.151",
      "x-forwarded-proto": "https",
      "x-forwarded-port": "443",
      "via": "1.1 vegur",
      "connect-time": "1",
      "x-request-start": "1564636047811",
      "total-route-time": "0",
      "content-length": "469"
    },
    "body": {
      "v": "0.1.7.h",
      "t": "10006F0C1",
      "cardno": "2184779661072642",
      "cardtype": "uid7",
      "txndate": "2019-08-01 13:04:24",
      "act": "90100",
      "seq": "2317",
      "p128": {
        "stockTake": {
          "storeCode": {
            "t": "Ware House 1",
            "k": "1",
            "c": "WH1"
          },
          "listref": [
            {
              "stockCode": {
                "t": "Paper Roll 1",
                "k": "1",
                "c": "PPR1"
              },
              "operation": {
                "t": "Add Stock",
                "k": "1",
                "c": "ADD"
              },
              "quantity": "12",
              "remark": "HI THERE",
              "_dt_": "2019-08-01 13:04:48"
            }
          ]
        }
      },
      "p18": "2316",
      "hash": "2",
      "tid": "10006F0C1",
      "ver": "0.1.7.h",
      "tmsId": "playground4"
    }
  }

```