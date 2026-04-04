
int sl_tac=0, sl_nhan=0, sl_cachua=0;
#define TAC1 2
#define TAC2 3
#define TAC3 4

#define NHAN1 5
#define NHAN2 6
#define NHAN3 7

#define CACHUA1 8
#define CACHUA2 9
#define CACHUA3 10

#define DOC_TAC1 22
#define DOC_TAC2 24
#define DOC_NHAN1 26
#define DOC_NHAN2 28
#define DOC_CACHUA1 30
#define DOC_CACHUA2 32
#define DOC_XUAT 34
bool state_xuat = false;
void setup() {

  
  Serial.begin(9600);

  pinMode(TAC1, OUTPUT);
  pinMode(TAC2, OUTPUT);
  pinMode(TAC3, OUTPUT);

  pinMode(NHAN1, OUTPUT);
  pinMode(NHAN2, OUTPUT);
  pinMode(NHAN3, OUTPUT);

  pinMode(CACHUA1, OUTPUT);
  pinMode(CACHUA2, OUTPUT);
  pinMode(CACHUA3, OUTPUT);

  pinMode(DOC_TAC1, INPUT);
  pinMode(DOC_TAC2, INPUT);
  pinMode(DOC_NHAN1, INPUT);
  pinMode(DOC_NHAN2, INPUT);
  pinMode(DOC_CACHUA1, INPUT);
  pinMode(DOC_CACHUA2, INPUT);

  pinMode(DOC_XUAT, INPUT);

}

void loop() {

  digitalWrite(TAC1, HIGH); //ô tắc 1 có hàng
  // digitalWrite(TAC1, LOW); //ô tắc 1 không có hàng

  digitalWrite(TAC2, HIGH); //ô tắc 2 có hàng
  // digitalWrite(TAC2, LOW); //ô tắc 2 không có hàng

  digitalWrite(TAC3, HIGH); //ô tắc 3 có hàng
  // digitalWrite(TAC3, LOW); //ô tắc 3 không có hàng

  // digitalWrite(NHAN1, HIGH); //ô tắc 1 có hàng
  digitalWrite(NHAN2, HIGH); //ô tắc 2 có hàng
  digitalWrite(NHAN3, HIGH); //ô tắc 3 có hàng

  digitalWrite(CACHUA1, HIGH); //ô tắc 1 có hàng
  digitalWrite(CACHUA2, HIGH); //ô tắc 2 có hàng
  digitalWrite(CACHUA3, HIGH); //ô tắc 3 có hàng

  int doc_tac1 = digitalRead(DOC_TAC1);
  int doc_tac2 = digitalRead(DOC_TAC2);
  int doc_nhan1 = digitalRead(DOC_NHAN1);
  int doc_nhan2 = digitalRead(DOC_NHAN2);
  int doc_cachua1 = digitalRead(DOC_CACHUA1);
  int doc_cachua2 = digitalRead(DOC_CACHUA2);

  if(doc_tac1 <= 0.5 && doc_tac2 <=0.5){
    sl_tac = 0;
  }else if(doc_tac1 <= 0.5 && doc_tac2 >=0.5){
    sl_tac =1;
  }else if(doc_tac1 >= 0.5 && doc_tac2 <=0.5){
    sl_tac =2;
  }else if(doc_tac1 >= 0.5 && doc_tac2 >=0.5){
    sl_tac =3;
  }
  if(doc_nhan1 <= 0.5 && doc_nhan2 <=0.5){
    sl_nhan = 0;
  }else if(doc_nhan1 <= 0.5 && doc_nhan2 >=0.5){
    sl_nhan =1;
  }else if(doc_nhan1 >= 0.5 && doc_nhan2 <=0.5){
    sl_nhan =2;
  }else if(doc_nhan1 >= 0.5 && doc_nhan2 >=0.5){
    sl_nhan =3;
  }
  if(doc_cachua1 <= 0.5 && doc_cachua2 <=0.5){
    sl_cachua = 0;
  }else if(doc_cachua1 <= 0.5 && doc_cachua2 >=0.5){
    sl_cachua =1;
  }else if(doc_cachua1 >= 0.5 && doc_cachua2 <=0.5){
    sl_cachua =2;
  }else if(doc_cachua1 >= 0.5 && doc_cachua2 >=0.5){
    sl_cachua =3;
  }

  int doc_xuat = digitalRead(DOC_XUAT);

  if(doc_xuat >= 0.5 ){
    state_xuat = true;
  }else if(doc_xuat <= 0.5 ){
    state_xuat = false;
  }

  Serial.print(sl_tac);  Serial.print("----"); 
  Serial.print(sl_nhan); Serial.print("----"); 
  Serial.println(sl_cachua);
  Serial.println("---------------------");
  Serial.println(state_xuat);
  Serial.println("-------------");


  delay(1000);



} 





