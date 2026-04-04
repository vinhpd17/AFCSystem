#if defined(ESP32)
#include <WiFi.h>
#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>
//---------------------------------------------------------------------
//config
#define WIFI_SSID "405A B8"
#define WIFI_PASSWORD "405405405"

#define API_KEY "hMUdpCHH5Z7ruN5xF54MMmUdwFzbSnd2gHHBos4U"
#define DATABASE_URL "datn-90694-default-rtdb.asia-southeast1.firebasedatabase.app"
//----------------------------------------------------------------------
FirebaseData fbdo; FirebaseAuth auth; FirebaseConfig config;
int tac, nhan, cachua, xuat_tac, xuat_nhan, xuat_cachua, xuat;

#define DOC_TAC1 2
#define DOC_TAC2 4
#define DOC_TAC3 5
#define DOC_NHAN1 18
#define DOC_NHAN2 19
#define DOC_NHAN3 21
#define DOC_CACHUA1 13
#define DOC_CACHUA2 12
#define DOC_CACHUA3 14

#define XUAT_TAC1 27
#define XUAT_TAC2 26
#define XUAT_NHAN1 25
#define XUAT_NHAN2 15
#define XUAT_CACHUA1 32
#define XUAT_CACHUA2 23
#define XUAT 22

void setup() {
  Serial.begin(115200);
  delay(2000);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  Firebase.begin(DATABASE_URL, API_KEY);
  Firebase.setDoubleDigits(5);

  pinMode(DOC_TAC1, INPUT_PULLDOWN );pinMode(DOC_TAC2, INPUT_PULLDOWN );
  pinMode(DOC_TAC3, INPUT_PULLDOWN );
  pinMode(DOC_NHAN1, INPUT_PULLDOWN ); pinMode(DOC_NHAN2, INPUT_PULLDOWN );
  pinMode(DOC_NHAN3, INPUT_PULLDOWN );
  pinMode(DOC_CACHUA1, INPUT_PULLDOWN ); pinMode(DOC_CACHUA2, INPUT_PULLDOWN );
  pinMode(DOC_CACHUA3, INPUT_PULLDOWN );

  pinMode(XUAT_TAC1, OUTPUT); pinMode(XUAT_TAC2, OUTPUT);
  pinMode(XUAT_NHAN1, OUTPUT); pinMode(XUAT_NHAN2, OUTPUT);
  pinMode(XUAT_CACHUA1, OUTPUT); pinMode(XUAT_CACHUA2, OUTPUT);
  pinMode(XUAT, OUTPUT);
}

void loop() {

  if (Firebase.ready()) {
    Serial.println("------------------");
    delay(50);

    int doc_tac1 = digitalRead(DOC_TAC1);
    int doc_tac2 = digitalRead(DOC_TAC2);
    int doc_tac3 = digitalRead(DOC_TAC3);

    Serial.print(doc_tac1); Serial.print("---") ;
    Serial.print(doc_tac2); Serial.print("---") ;
    Serial.print(doc_tac3);
    Serial.println();

    if (doc_tac1 <= 0.5 && doc_tac2 <=0.5 && doc_tac3 <=0.5) {
      tac = 0;
    } else if (doc_tac1 >= 0.5 && doc_tac2 >=0.5 && doc_tac3 <=0.5) {
      tac = 2;
    } else if (doc_tac1 >= 0.5 && doc_tac2 <=0.5 && doc_tac3 >=0.5) {
      tac = 2;
    } else if (doc_tac1 <= 0.5 && doc_tac2 >=0.5 && doc_tac3 >=0.5) {
      tac = 2;
    } else if (doc_tac1 >= 0.5 && doc_tac2 <=0.5 && doc_tac3 <=0.5) {
      tac = 1;
    } else if (doc_tac1 <= 0.5 && doc_tac2 >=0.5 && doc_tac3 <=0.5) {
      tac = 1;
    } else if (doc_tac1 <= 0.5 && doc_tac2 <=0.5 && doc_tac3 >=0.5) {
      tac = 1;
    } else if (doc_tac1 >= 0.5 && doc_tac2 >=0.5 && doc_tac3 >=0.5) {
      tac = 3;
    }
    Firebase.setInt(fbdo, "/test/tac", tac);

    int doc_nhan1 = digitalRead(DOC_NHAN1);
    int doc_nhan2 = digitalRead(DOC_NHAN2);
    int doc_nhan3 = digitalRead(DOC_NHAN3);

    Serial.print(doc_nhan1); Serial.print("---") ;
    Serial.print(doc_nhan2); Serial.print("---") ;
    Serial.print(doc_nhan3);
    Serial.println();

    if (doc_nhan1 <= 0.5 && doc_nhan2 <=0.5 && doc_nhan3 <=0.5) {
      nhan = 0;
    } else if (doc_nhan1 >= 0.5 && doc_nhan2 >=0.5 && doc_nhan3 <=0.5) {
      nhan = 2;
    } else if (doc_nhan1 >= 0.5 && doc_nhan2 <=0.5 && doc_nhan3 >=0.5) {
      nhan = 2;
    } else if (doc_nhan1 <= 0.5 && doc_nhan2 >=0.5 && doc_nhan3 >=0.5) {
      nhan = 2;
    } else if (doc_nhan1 >= 0.5 && doc_nhan2 <=0.5 && doc_nhan3 <=0.5) {
      nhan = 1;
    } else if (doc_nhan1 <= 0.5 && doc_nhan2 >=0.5 && doc_nhan3 <=0.5) {
      nhan = 1;
    } else if (doc_nhan1 <= 0.5 && doc_nhan2 <=0.5 && doc_nhan3 >=0.5) {
      nhan = 1;
    } else if (doc_nhan1 >= 0.5 && doc_nhan2 >=0.5 && doc_nhan3 >=0.5) {
      nhan = 3;
    }
    Firebase.setInt(fbdo, "/test/nhan", nhan);

    int doc_cachua1 = digitalRead(DOC_CACHUA1);
    int doc_cachua2 = digitalRead(DOC_CACHUA2);
    int doc_cachua3 = digitalRead(DOC_CACHUA3);

    Serial.print(doc_cachua1); Serial.print("---") ;
    Serial.print(doc_cachua2); Serial.print("---") ;
    Serial.print(doc_cachua3);
    Serial.println();
    if (doc_cachua1 <= 0.5 && doc_cachua2 <=0.5 && doc_cachua3 <=0.5) {
      cachua = 0;
    } else if (doc_cachua1 >= 0.5 && doc_cachua2 >=0.5 && doc_cachua3 <=0.5) {
      cachua = 2;
    } else if (doc_cachua1 >= 0.5 && doc_cachua2 <=0.5 && doc_cachua3 >=0.5) {
      cachua = 2;
    } else if (doc_cachua1 <= 0.5 && doc_cachua2 >=0.5 && doc_cachua3 >=0.5) {
      cachua = 2;
    } else if (doc_cachua1 >= 0.5 && doc_cachua2 <=0.5 && doc_cachua3 <=0.5) {
      cachua = 1;
    } else if (doc_cachua1 <= 0.5 && doc_cachua2 >=0.5 && doc_cachua3 <=0.5) {
      cachua = 1;
    } else if (doc_cachua1 <= 0.5 && doc_cachua2 <=0.5 && doc_cachua3 >=0.5) {
      cachua = 1;
    } else if (doc_cachua1 >= 0.5 && doc_cachua2 >=0.5 && doc_cachua3 >=0.5) {
      cachua = 3;
    }
    Firebase.setInt(fbdo, "/test/cachua", cachua);

    Serial.printf("Get xuat_tac--  %s\n", Firebase.getInt(fbdo, "/test/xuat_tac") 
      ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    xuat_tac = fbdo.to<int>();
    Serial.printf("Get xuat_nhan--  %s\n", Firebase.getInt(fbdo, "/test/xuat_nhan") 
      ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    xuat_nhan = fbdo.to<int>();
    Serial.printf("Get xuat_cachua--  %s\n", Firebase.getInt(fbdo, "/test/xuat_cachua") 
      ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    xuat_cachua = fbdo.to<int>();
    Serial.printf("Get xuat--  %s\n", Firebase.getInt(fbdo, "/test/xuat") 
      ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    xuat = fbdo.to<int>();
    delay(1000);
    if (xuat_tac == 1) {
      digitalWrite(XUAT_TAC1, 0); digitalWrite(XUAT_TAC2, 1);
    } else if (xuat_tac == 2) {
      digitalWrite(XUAT_TAC1, 1); digitalWrite(XUAT_TAC2, 0);
    } else if (xuat_tac == 3) {
      digitalWrite(XUAT_TAC1, 1); digitalWrite(XUAT_TAC2, 1);
    } else{
      digitalWrite(XUAT_TAC1, 0); digitalWrite(XUAT_TAC2, 0);
    }

    if (xuat_nhan == 1) {
      digitalWrite(XUAT_NHAN1, 0); digitalWrite(XUAT_NHAN2, 1);
    } else if (xuat_nhan == 2) {
      digitalWrite(XUAT_NHAN1, 1); digitalWrite(XUAT_NHAN2, 0);
    } else if (xuat_nhan == 3) {
      digitalWrite(XUAT_NHAN1, 1); digitalWrite(XUAT_NHAN2, 1);
    }else{
      digitalWrite(XUAT_NHAN1, 0); digitalWrite(XUAT_NHAN2, 0);
    }

    if (xuat_cachua == 1) {
      digitalWrite(XUAT_CACHUA1, 0); digitalWrite(XUAT_CACHUA2, 1);
    } else if (xuat_cachua == 2) {
      digitalWrite(XUAT_CACHUA1, 1); digitalWrite(XUAT_CACHUA2, 0);
    } else if (xuat_cachua == 3) {
      digitalWrite(XUAT_CACHUA1, 1); digitalWrite(XUAT_CACHUA2, 1);
    }else{
      digitalWrite(XUAT_CACHUA1, 0); digitalWrite(XUAT_CACHUA2, 0);
    }

    if(xuat == 0){
      digitalWrite(XUAT, 1);
    } else if (xuat == 1){
      digitalWrite(XUAT, 0);
    }

  }
}