#include <Melsec.h>

Melsec plc(Serial2, 9600);

void setup() {
  Serial.begin(9600);
  plc.init();

}

void loop() {
  int d0 = plc.ReadWord(0); //ReadWord ~ Read Register D0;
  int32_t d2 = plc.ReadDWord(2);
  uint8_t m0 = plc.ReadMemory(500); // Read M0
  uint8_t m1 = plc.WriteMemory(506);
  // Serial.println(d0);
  // Serial.println(d2);
  Serial.println(m0);
  delay(10);
}
