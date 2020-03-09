<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-survey page-header d-flex align-items-center">
      <div class="container page-header-title" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.survey.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.survey.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <!-- PAGE 1 -->
      <div
        class="page-body survey-display"
        style="overflow: hidden;"
        v-if="isDescriptionOpen == true"
      >
        <div class="body-padding">
          <div
            class="d-flex flex-column"
            style="text-align:center; width: 100%; padding: 30px 0px 40px 0px;"
          >
            <h3>แบบสัมภาษณ์ในงานวิจัยผึ้ง</h3>
            <h5>แลบวิจัยผึ้งพื้นเมือง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี วิทยาเขตราชบุรี</h5>
          </div>
          <div class="des-text">
            <p class="topic-2" style=" margin: 10px 0px 20px 0px !important;">คำชี้แจง</p>
            <p style=" margin-top: 0px !important; margin-bottom:0px;">
              1.&nbsp;&nbsp;&nbsp;แบบสอบถามชุดนี้มีจุดมุ่งหมายที่จะทราบข้อมูลเกี่ยวกับข้อมูลพื้นฐานของผึ้งโพรงและชันโรง
              <br />2.&nbsp;&nbsp;&nbsp;คำตอบในแบบสัมภาษณ์นี้จะนาไปใช้เพื่อการวิจัยเท่านั้น ไม่มีผลกระทบต่อสวัสดิภาพของท่าน ดังนั้นจึงใคร่ขอความร่วมมือจากท่านได้กรุณาช่วยตอบคำถามทุกข้อตรงตามความเป็นจริงที่ปฏิบัติและตรงกับความคิดเห็นของท่าน
              <br />3.&nbsp;&nbsp;&nbsp;แบบสอบถามสาหรับเกษตรกรผู้เลี้ยงผึ้งโพรงมีทั้งหมด 2 ส่วน ประกอบด้วย
            </p>
            <div style="text-indent: 2rem">
              <br />
              <li>&nbsp;ส่วนที่ 1 ข้อมูลทั่วไปของเกษตรกร</li>
              <li>&nbsp;ส่วนที่ 2 ข้อมูลเกี่ยวกับการเลี้ยงผึ้งโพรงและชันโรง</li>
            </div>
            <p>
              <br />4.&nbsp;&nbsp;&nbsp;กรุณาทำเครื่องหมาย / ลงในช่องสี่เหลี่ยมหน้าข้อความที่ต้องการและเติมข้อความลงในช่องว่างตามความเป็นจริงที่ท่านปฎิบัติ
              <br />5.&nbsp;&nbsp;&nbsp;ผู้วิจัยขอขอบคุณท่านที่กรุณาตอบคำถามและให้ความร่วมมือในการจัดเก็บข้อมูลในครั้งนี้
            </p>
          </div>
          <div class="d-flex justify-content-center" style="padding-top: 30px; width: 100%;">
            <button v-on:click="acceptButton();" class="next-btn">ต่อไป</button>
          </div>
        </div>
      </div>

      <!-- PAGE 2 -->
      <div class="page-body survey-display" style="overflow: hidden;" v-if="isSuveyOpen == true">
        <div class="body-padding">
          <div
            v-if="isPart1Open == true"
            style="width: 100%;background-color: #6c757d00; border-radius: 5px;"
          >
            <p
              class="topic-2"
              style=" margin: 10px 0px 20px 0px !important;"
            >ส่วนที่ 1 ข้อมูลทั่วไปของเกษตรกร</p>

            <p
              style="padding: 10px; margin: 0px; background-color: #efefef; border-radius: 5px;"
            >1.1 ปัจจัยทางสังคม</p>

            <div class="row">
              <div class="mg col-lg-3 col-md-6 col-sm-12">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">ชื่อ</p>
                <input
                  v-model="submittedData.firstname"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                />
              </div>
              <div class="mg col-lg-3 col-md-6 col-sm-12">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">สกุล</p>
                <input
                  v-model="submittedData.lastname"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                />
              </div>
              <div class="mg col-lg-6 col-md-12 col-sm-12">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">ชื่อฟาร์ม</p>
                <input
                  v-model="submittedData.farmname"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>

            <div class="row">
              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">บ้านเลขที่</p>
                <input
                  v-model="submittedData.other.personalInfo.social.address.houseNo"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                />
              </div>
              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">หมู่ที่</p>
                <input
                  v-model="submittedData.other.personalInfo.social.address.moo"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                />
              </div>

              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">ตำบล</p>
                <input
                  v-model="submittedData.other.personalInfo.social.address.subDistrict"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">อำเภอ</p>
                <input
                  v-model="submittedData.other.personalInfo.social.address.district"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">จังหวัด</p>
                <select
                  name="province"
                  style="width:100%;"
                  v-model="submittedData.other.personalInfo.social.address.province"
                >
                  <option value="กรุงเทพมหานคร" selected>กรุงเทพมหานคร</option>
                  <option value="กระบี่">กระบี่</option>
                  <option value="กาญจนบุรี">กาญจนบุรี</option>
                  <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                  <option value="กำแพงเพชร">กำแพงเพชร</option>
                  <option value="ขอนแก่น">ขอนแก่น</option>
                  <option value="จันทบุรี">จันทบุรี</option>
                  <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                  <option value="ชัยนาท">ชัยนาท</option>
                  <option value="ชัยภูมิ">ชัยภูมิ</option>
                  <option value="ชุมพร">ชุมพร</option>
                  <option value="ชลบุรี">ชลบุรี</option>
                  <option value="เชียงใหม่">เชียงใหม่</option>
                  <option value="เชียงราย">เชียงราย</option>
                  <option value="ตรัง">ตรัง</option>
                  <option value="ตราด">ตราด</option>
                  <option value="ตาก">ตาก</option>
                  <option value="นครนายก">นครนายก</option>
                  <option value="นครปฐม">นครปฐม</option>
                  <option value="นครพนม">นครพนม</option>
                  <option value="นครราชสีมา">นครราชสีมา</option>
                  <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                  <option value="นครสวรรค์">นครสวรรค์</option>
                  <option value="นราธิวาส">นราธิวาส</option>
                  <option value="น่าน">น่าน</option>
                  <option value="นนทบุรี">นนทบุรี</option>
                  <option value="บึงกาฬ">บึงกาฬ</option>
                  <option value="บุรีรัมย์">บุรีรัมย์</option>
                  <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                  <option value="ปทุมธานี">ปทุมธานี</option>
                  <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                  <option value="ปัตตานี">ปัตตานี</option>
                  <option value="พะเยา">พะเยา</option>
                  <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                  <option value="พังงา">พังงา</option>
                  <option value="พิจิตร">พิจิตร</option>
                  <option value="พิษณุโลก">พิษณุโลก</option>
                  <option value="เพชรบุรี">เพชรบุรี</option>
                  <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                  <option value="แพร่">แพร่</option>
                  <option value="พัทลุง">พัทลุง</option>
                  <option value="ภูเก็ต">ภูเก็ต</option>
                  <option value="มหาสารคาม">มหาสารคาม</option>
                  <option value="มุกดาหาร">มุกดาหาร</option>
                  <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                  <option value="ยโสธร">ยโสธร</option>
                  <option value="ยะลา">ยะลา</option>
                  <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                  <option value="ระนอง">ระนอง</option>
                  <option value="ระยอง">ระยอง</option>
                  <option value="ราชบุรี">ราชบุรี</option>
                  <option value="ลพบุรี">ลพบุรี</option>
                  <option value="ลำปาง">ลำปาง</option>
                  <option value="ลำพูน">ลำพูน</option>
                  <option value="เลย">เลย</option>
                  <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                  <option value="สกลนคร">สกลนคร</option>
                  <option value="สงขลา">สงขลา</option>
                  <option value="สมุทรสาคร">สมุทรสาคร</option>
                  <option value="สมุทรปราการ">สมุทรปราการ</option>
                  <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                  <option value="สระแก้ว">สระแก้ว</option>
                  <option value="สระบุรี">สระบุรี</option>
                  <option value="สิงห์บุรี">สิงห์บุรี</option>
                  <option value="สุโขทัย">สุโขทัย</option>
                  <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                  <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                  <option value="สุรินทร์">สุรินทร์</option>
                  <option value="สตูล">สตูล</option>
                  <option value="หนองคาย">หนองคาย</option>
                  <option value="หนองบัวลำภู">หนองบัวลำภู</option>
                  <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                  <option value="อุดรธานี">อุดรธานี</option>
                  <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                  <option value="อุทัยธานี">อุทัยธานี</option>
                  <option value="อุบลราชธานี">อุบลราชธานี</option>
                  <option value="อ่างทอง">อ่างทอง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
              <div class="mg col-lg-2 col-md-4 col-sm-6">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">รหัสไปรษณีย์</p>
                <input
                  v-model="submittedData.other.personalInfo.social.address.postcode"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-2">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">วันที่ทำแบบสอบถาม</p>
                <input
                  v-model="submittedData.other.personalInfo.social.submittedDate"
                  type="date"
                  style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                />
              </div>
              <div class="mg col-lg-2">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">เพศ</p>
                <div>
                  <input
                    v-model="submittedData.other.personalInfo.social.sex"
                    type="radio"
                    name="gender"
                    value="male"
                    style="border-radius: 5px; border: 1px solid #bebfc1; margin: 0px 10px;"
                  /> ชาย
                  <input
                    v-model="submittedData.other.personalInfo.social.sex"
                    type="radio"
                    name="gender"
                    value="female"
                    checked
                    style="border-radius: 5px; border: 1px solid #bebfc1; margin: 0px 10px;"
                  /> หญิง
                </div>
              </div>
              <div class="mg col-lg-2">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">อายุ</p>
                <input
                  v-model="submittedData.other.personalInfo.social.age"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">จำนวนสมาชิกในครัวเรือน</p>
                <input
                  v-model="submittedData.other.personalInfo.social.houseMemberCount"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >ระดับการศึกษาสูงสุดที่ท่านสำเร็จ</p>
                <select
                  name="province"
                  style="width:100%;"
                  v-model="submittedData.other.personalInfo.social.education"
                >
                  <option value="กรุงเทพมหานคร" selected>ประถมศึกษา</option>
                  <option value="กระบี่">มัธยมศึกษาตอนต้น</option>
                  <option value="กาญจนบุรี">มัธยมศึกษาตอนปลาย</option>
                  <option value="กรุงเทพมหานคร">อนุปริญญาหรือเทียบเท่า</option>
                  <option value="กระบี่">ปริญญาตรี</option>
                  <option value="กาญจนบุรี">สูงกว่าปริญญาตรี</option>
                  <option value="กาญจนบุรี">ความรู้อื่นๆ</option>
                </select>
              </div>
              <div class="mg col-lg-4">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >ท่านเป็นสมาชิกสถาบันการเกษตรหรือไม่</p>
                <input
                  v-model="submittedData.other.personalInfo.social.argriGroup.isMember"
                  type="radio"
                  name="is_member"
                  :value="true"
                  checked
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> เป็น
                <input
                  v-model="submittedData.other.personalInfo.social.argriGroup.isMember"
                  type="radio"
                  name="is_member"
                  :value="false"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ไม่เป็น
              </div>
              <div class="mg col-lg-4">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">หากเป็น เป็นเพราะ</p>
                <input
                  v-model="submittedData.other.personalInfo.social.argriGroup.ifYesWhy"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-4">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">จำนวนสมาชิกกี่ท่าน</p>
                <input
                  v-model="submittedData.other.personalInfo.social.argriGroup.memberCount"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-4">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >ท่านเป็นผู้นำกลุ่ม หรือผู้นำชุมชนหรือไม่</p>
                <input
                  v-model="submittedData.other.personalInfo.social.leaderGroup.isMember"
                  type="radio"
                  name="is_leader"
                  :value="true"
                  checked
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> เป็น
                <input
                  v-model="submittedData.other.personalInfo.social.leaderGroup.isMember"
                  type="radio"
                  name="is_leader"
                  :value="false"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ไม่เป็น
              </div>
              <div class="mg col-lg-4">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">หากเป็น เป็นตำแหน่งอะไร</p>
                <input
                  v-model="submittedData.other.personalInfo.social.leaderGroup.rank"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >ท่านเคยได้รับการฝึกอบรมเกี่ยวกับการเกษตร (ปลูกพืช เลี้ยงสัตว์ ประมง) หรือการเลี้ยงผึ้งหรือไม่</p>
                <input
                  v-model="submittedData.other.personalInfo.social.leaderGroup.isBeeKeepingTrained"
                  type="radio"
                  name="is_trained"
                  :value="true"
                  checked
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> เคย
                <input
                  v-model="submittedData.other.personalInfo.social.leaderGroup.isBeeKeepingTrained"
                  type="radio"
                  name="is_trained"
                  :value="false"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ไม่เคย
              </div>
            </div>

            <p
              style="padding: 10px; margin: 20px 0px 0px 0px; background-color: #efefef; border-radius: 5px;"
            >1.2 ปัจจัยทางเศรษฐกิจ</p>

            <div class="row">
              <div class="mg col-lg-3">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">อาชีพหลักของท่าน</p>
                <select
                  name="carieer"
                  style="width:100%;"
                  v-model="submittedData.other.personalInfo.economic.career[0].title"
                >
                  <option value="เลี้ยงผึ้ง" selected>เลี้ยงผึ้ง</option>
                  <option value="ทำไร่">ทำไร่</option>
                  <option value="ทำสวน">ทำสวน</option>
                  <option value="ค้าขาย">ค้าขาย</option>
                  <option value="ประมง">ประมง</option>
                  <option value="ปศุสัตว์">ปศุสัตว์</option>
                  <option value="รับราชการ">รับราชการ</option>
                  <option value="รับจ้าง">รับจ้าง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
              <div class="mg col-lg-3">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >รายได้จากอาชีพหลักต่อพื้นที่ต่อไร่</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[0].incomePerArea"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >รายได้กี่บาทต่อเดือน/หรือต่อรอบ</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[0].incomePerAnnual"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">รายได้(บาทต่อปี)</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[0].incomePerYear"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-3">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">อาชีพรองของท่าน</p>
                <select
                  name="carieer_bacukup"
                  style="width:100%;"
                  v-model="submittedData.other.personalInfo.economic.career[1].title"
                >
                  <option value="เลี้ยงผึ้ง" selected>เลี้ยงผึ้ง</option>
                  <option value="ทำไร่">ทำไร่</option>
                  <option value="ทำสวน">ทำสวน</option>
                  <option value="ค้าขาย">ค้าขาย</option>
                  <option value="ประมง">ประมง</option>
                  <option value="ปศุสัตว์">ปศุสัตว์</option>
                  <option value="รับราชการ">รับราชการ</option>
                  <option value="รับจ้าง">รับจ้าง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
              <div class="mg col-lg-3">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >รายได้จากอาชีพรองต่อพื้นที่ต่อไร่</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[1].incomePerArea"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >รายได้กี่บาทต่อเดือน/หรือต่อรอบ</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[1].incomePerAnnual"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
              <div class="mg col-lg-3">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">รายได้(บาทต่อปี)</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.career[1].incomePerYear"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>

            <div class="row">
              <div class="mg col-lg-6">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >รายได้รวมสุทธิของครัวเรือนสุทธิ (บาท/ปี)</p>
                <input
                  v-model="submittedData.other.personalInfo.economic.familyNetIncome"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
          </div>

          <div
            v-if="isPart2Open == true"
            style="width: 100%;background-color: #6c757d00; border-radius: 5px;"
          >
            <p
              class="topic-2"
              style=" margin: 10px 0px 10px 0px !important;"
            >ส่วนที่ 2 ข้อมูลเกี่ยวกับการเลี้ยงผึ้งโพรง/ชันโรง</p>

            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >1. ประสบการณ์การเลี้ยงผึ้ง และ/หรือชันโรง จำนวนกี่ปี/เริ่มตั้งเเต่ปี พ.ศ./ประวัติในอดีตตั้งแต่เริ่มต้นจนถึงปัจจุบัน</p>
                <input
                  v-model="submittedData.other.beekeeping.q1"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >2. จำนวนรังผึ้ง และ/หรือชันโรง ที่เลี้ยงปัจจุบัน (รัง)</p>
                <input
                  v-model="submittedData.other.beekeeping.q2"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >3. ท่านมีเเรงงานในครอบครัวที่เลี้ยงผึ้ง และ/หรือชันโรง มีจำนวนทั้งหมด (คน)</p>
                <input
                  v-model="submittedData.other.beekeeping.q3"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >4. จำนวนเเรงงานจ้างในการเลี้ยงผึ้ง และ/หรือชันโรง (คน)</p>
                <input
                  v-model="submittedData.other.beekeeping.q4"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >5. พื้นที่เลี้ยงผึ้ง และ/หรือชันโรง (ไร่)</p>
                <input
                  v-model="submittedData.other.beekeeping.q5"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >6. ชนิดของพืชอาหารในพื้นที่เลี้ยงผึ้งและ/หรือชันโรง /มีจำนวนกี่ไร่ มีทั้งหมดกี่ชนิด อะไรบ้าง (เช่น ยางพารา ปาล์มน้ำมัน ทุเรียน เงาะ มังคุด /พืชอื่นๆ)</p>
                <input
                  v-model="submittedData.other.beekeeping.q6"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >7. มีการย้ายรังผึ้งและ/หรือชันโรง กี่ครั้งต่อปี (ครั้งที่ย้ายรังมีพืชอาหาร /สถานที่ /ช่วงเดือน /ได้ผลผลิตน้ำผึ้ง ไขผึ้ง เกสร อื่นๆ (กก.)</p>
                <input
                  v-model="submittedData.other.beekeeping.q7"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >8. ผึ้งและ/หรือชันโรง ที่ท่านเลี้ยงได้มาจากที่ไหน</p>
                <input
                  v-model="submittedData.other.beekeeping.q8"
                  type="radio"
                  name="where"
                  value="ซื้อพันธุ์ผึ้งมาเลี้ยง"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ซื้อพันธุ์ผึ้งมาเลี้ยง
                <input
                  v-model="submittedData.other.beekeeping.q8"
                  type="radio"
                  name="where"
                  value="เข้ามาอยู่เองตามธรรมชาติ"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> เข้ามาอยู่เองตามธรรมชาติ
                <input
                  v-model="submittedData.other.beekeeping.q8"
                  type="radio"
                  name="where"
                  value="ใช้วิธีการล่อผึ้งจากธรรมชาติ"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ใช้วิธีการล่อผึ้งจากธรรมชาติ
                <input
                  v-model="submittedData.other.beekeeping.q8"
                  type="radio"
                  name="where"
                  value="อื่นๆ"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> อื่นๆ
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >9. มีการนำผึ้งและ/หรือชันโรงมาใช้ในการผสมเกสรหรือไม่ (ถ้ามี ได้แก่พืชชนิดไหน /ถ้าไม่มี มีความสนใจจะใช้หรือไม่)</p>
                <input
                  v-model="submittedData.other.beekeeping.q9"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >10. ฟาร์มของท่านมีปัญหาเกี่ยวกับการทิ้งรังของผึ้งโพรงและ/หรือชันโรง หรือไม่ (ถ้ามี ฤดูกาลไหน/จากจำนวนรังเดิม/จำนวนรังที่ทิ้ง/ปี พ.ศ.ใด หรือถ้าไม่มีการทิ้งรัง ไม่มีเพราะเหตุใด)</p>
                <input
                  v-model="submittedData.other.beekeeping.q10"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >11. สาเหตุของการทิ้งรังของผึ้งและ/หรือชันโรง ในฟาร์มของท่านคือ (ตอบได้มากกว่า 1 ข้อ)</p>
                <input
                  v-model="submittedData.other.beekeeping.q11.c1"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ซื้อพันธุ์ผึ้งมาเลี้ยง
                <input
                  v-model="submittedData.other.beekeeping.q11.c2"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> มีโรคและศัตรูเข้ามาทำลายรัง
                <input
                  v-model="submittedData.other.beekeeping.q11.c3"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ทิ้งรังตามฤดูกาล
                <input
                  v-model="submittedData.other.beekeeping.q11.c4"
                  type="checkbox"
                  name="where_C"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> อื่นๆ
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >12. ท่านแก้ไขปัญหาการทิ้งรังของผึ้งและ/หรือชันโรง หรือไม่ (แก้ไข โดย.../ไม่มีการแก้ไข โดย...)</p>
                <input
                  v-model="submittedData.other.beekeeping.q12"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >13. ปัญหาการทิ้งรังของผึ้งและ/หรือชันโรง มีผลต่อต้นทุน-รายได้หรือไม่ (มี เนื่องจาก.../ ไม่มี เนื่องจาก...)</p>
                <input
                  v-model="submittedData.other.beekeeping.q13"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >14. ท่านมีการจัดการรังจากการทิ้งรังของผึ้งและ/หรือชันโรง หรือไม่ (เลือกได้มากกว่า 1 ข้อ)</p>
                <input
                  v-model="submittedData.other.beekeeping.q14.c1"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> มี โดยขายรังเปล่า
                <input
                  v-model="submittedData.other.beekeeping.q14.c2"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> มี โดยนำมาแยกไขผึ้งแล้วขายต่อ
                <input
                  v-model="submittedData.other.beekeeping.q14.c3"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> มี นำไปใช้หมุนเวียนในฟาร์ม
                <input
                  v-model="submittedData.other.beekeeping.q14.c4"
                  type="checkbox"
                  name="where_C"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> อื่นๆ
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >15. ต้นทุนการเลี้ยงผึ้งและ/หรือชันโรง กี่บาทต่อรัง (เช่น ค่ากล่องเลี้ยงผึ้ง ไม้ ตะปู หมวกกันผึ้ง คอนผึ้ง เเรงงาน น้ำตาล ฯลฯ</p>
                <input
                  v-model="submittedData.other.beekeeping.q15"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >16. ราคาขายผลผลิตของผึ้งและ/หรือชันโรง แต่ละชนิดได้ปริมาณกี่ กก./รังๆละกี่บาท (เช่น น้ำผึ้ง ไขผึ้ง เกสรผึ้ง พันธุ์ผึ้ง ฯลฯ )</p>
                <input
                  v-model="submittedData.other.beekeeping.q16"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >17. วิธีการเก็บผลผลิตน้ำผึ้ง ใช้วิธีการใด</p>
                <input
                  v-model="submittedData.other.beekeeping.q17.c1"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> เครื่องสลัดน้ำผึ้ง
                <input
                  v-model="submittedData.other.beekeeping.q17.c2"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> กรีดจากรัง
                <input
                  v-model="submittedData.other.beekeeping.q17.c3"
                  type="checkbox"
                  name="where_c"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> ใช้ผ้าขาวบางและบีบคั้นทั้งรัง
                <input
                  v-model="submittedData.other.beekeeping.q17.c4"
                  type="checkbox"
                  name="where_C"
                  :value="true"
                  style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                /> อื่นๆ
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >18. ผึ้งและ/หรือชันโรง ช่วยเพิ่มผลผลิตให้ท่านหรือไม่ (ชนิดของพืช/ผลผลิตที่ได้ต่อ กก.ต่อปี พ.ศ)</p>
                <input
                  v-model="submittedData.other.beekeeping.q18"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >19. ท่านมีเทคนิคหรือวิธีการเพิ่มผลผลิตน้ำผึ้งหรือไม่ (มี อย่างไร... /ไม่มี เนื่องจาก...)</p>
                <input
                  v-model="submittedData.other.beekeeping.q19"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >20. ท่านสามารถเก็บผลผลิตน้ำผึ้ง/ชันโรงได้ปีละกี่ครั้ง ช่วงไหนบ้าง</p>
                <input
                  v-model="submittedData.other.beekeeping.q20"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >21. ท่านสนใจให้สวนหรือฟาร์มของท่านเป็นจุดเรียนรู้หรือไม่ เพราะเหตุใด</p>
                <input
                  v-model="submittedData.other.beekeeping.q21"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >22. ท่านมีความสนใจเรียนรู้เพิ่มเติมหรือเข้าคอร์สอบรมเกี่ยวกับการทำผลิตภัณฑ์สบู่ แชมพู แปรรูปผลผลิต ฯลฯ หรืออบรมนักการตลาดท้องถิ่น หรือไม่ เพราะเหตุใด</p>
                <input
                  v-model="submittedData.other.beekeeping.q22"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p
                  style=" margin-top: 0px !important; margin-bottom:0px;"
                >23. ท่านมีความสนใจจะทดลองใช้รังผึ้งอัจฉริยะ (Smart hive) หรือไม่ เพราะเหตุใด</p>
                <input
                  v-model="submittedData.other.beekeeping.q23"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
            <div class="row">
              <div class="mg col-lg-12">
                <p style=" margin-top: 0px !important; margin-bottom:0px;">ข้อเสนอแนะ/อื่นๆ</p>
                <input
                  v-model="submittedData.other.beekeeping.add"
                  type="text"
                  style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                />
              </div>
            </div>
          </div>

          <div
            class="d-flex justify-content-center"
            style="padding-top: 30px; width: 100%;"
            v-if="isPart1Open == true"
          >
            <button v-on:click="prePart();" class="clear-btn" style="margin:0px 10px;">ย้อนกลับ</button>
            <button v-on:click="nextPart();" class="submit-btn" style="margin:0px 10px;">ต่อไป</button>
          </div>
          <div
            class="d-flex justify-content-center"
            style="padding-top: 30px; width: 100%;"
            v-if="isPart2Open == true"
          >
            <button v-on:click="prePart2();" class="clear-btn" style="margin:0px 10px;">ย้อนกลับ</button>
            <button v-on:click="submitForm();" class="submit-btn" style="margin:0px 10px;">ส่งข้อมูล</button>
          </div>
        </div>
      </div>

      <!-- PAGE 3 -->
      <div class="page-body survey-display" style="overflow: hidden;" v-if="isSubmitted == true">
        <div
          class="d-flex flex-column"
          style="text-align:center; width: 100%; padding: 30px 0px 40px 0px;"
        >
          <h3>เราได้รับคำตอบของคุณแล้ว</h3>
          <h5>ขอบคุณที่ร่วมเป็นส่วนหนึ่งกับเรา</h5>
        </div>
        <div class="d-flex justify-content-center" style="padding-top: 30px; width: 100%;">
          <router-link to="/">
            <button class="clear-btn" style="margin:0px 10px;">กลับไปหน้าแรก</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout_default from "@/layouts/main.vue";
import axios from "axios";
export default {
  name: "surveypage",
  created() {
    this.$emit(`update:layout`, layout_default);
  },
  data() {
    return {
      isDescriptionOpen: true,
      isSuveyOpen: false,
      isSubmitted: false,
      isPart1Open: false,
      isPart2Open: false,
      submittedData: {
        firstname: "",
        lastname: "",
        farmname: "",
        other: {
          personalInfo: {
            social: {
              submittedDate: "",
              address: {
                houseNo: "",
                moo: "",
                district: "",
                subDistrict: "",
                province: "",
                postcode: ""
              },
              sex: "",
              age: 0,
              houseMemberCount: 0,
              education: "",
              argriGroup: {
                isMember: true,
                ifYesWhy: "",
                memberCount: 0
              },
              leaderGroup: {
                isMember: true,
                rank: ""
              },
              isBeeKeepingTrained: true
            },
            economic: {
              career: [
                {
                  title: "",
                  incomePerArea: 0,
                  incomePerAnnual: 0,
                  incomePerYear: 0
                },
                {
                  title: "",
                  incomePerArea: 0,
                  incomePerAnnual: 0,
                  incomePerYear: 0
                }
              ],
              familyNetIncome: 0
            }
          },
          beekeeping: {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            q11: {
              c1: false,
              c2: false,
              c3: false,
              c4: false
            },
            q12: "",
            q13: "",
            q14: {
              c1: false,
              c2: false,
              c3: false,
              c4: false
            },
            q15: "",
            q16: "",
            q17: {
              c1: false,
              c2: false,
              c3: false,
              c4: false
            },
            q18: "",
            q19: "",
            q20: "",
            q21: "",
            q22: "",
            q23: "",
            add: ""
          }
        }
      }
    };
  },
  methods: {
    prePart() {
      this.isSuveyOpen = false;
      this.isDescriptionOpen = true;
      window.scrollTo(0, 0);
    },
    prePart2() {
      this.isSuveyOpen = true;
      this.isPart1Open = true;
      this.isPart2Open = false;
      window.scrollTo(0, 0);
    },
    nextPart() {
      this.isSuveyOpen = true;
      this.isPart1Open = false;
      this.isPart2Open = true;
      window.scrollTo(0, 0);
    },
    acceptButton() {
      this.isDescriptionOpen = false;
      this.isSuveyOpen = true;
      this.isPart1Open = true;
      window.scrollTo(0, 0);
    },
    submitForm() {
      axios
        .post("http://nhbee.kmutt.ac.th/api/survey/full", this.submittedData)
        .then(res => {
          if (res.status != 404 || res.status != 500) {
            this.isSuveyOpen = false;
            this.isSubmitted = true;
          }
        });
    }
  }
};
</script>

<style scoped>
.des-text {
  padding: 30px;
  border: 1px solid #ffc107;
  background-color: #ffc1070a;
  border-radius: 5px;
}
button {
  outline: none;
}
.header-bg-survey {
  background-image: url("/static/img/home-survey-bg.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}

.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  height: fit-content;
  border-radius: 5px;
  padding: 30px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
}
.survey-display {
  display: block;
}
.top-fix {
  margin-top: -310px;
}

/* TABLET */
@media screen and (max-width: 1024px) {
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .contact-display {
    display: block;
    width: 100vw;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
  .team-title {
    margin: 30px 0 40px 0px;
  }
}

.next-btn {
  background: #efefef;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  padding: 8px 15px;
}
.mapdiv {
  overflow: hidden;
  border-radius: 5px;
  background-color: rgb(237, 237, 237);
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic-2 {
  margin: 30px 0px 10px 0px;
  padding-left: 10px;
  color: #272727;
  font-weight: bold;
  font-size: 20px;
  border-color: #272727;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}

.aboutimg-div {
  border-radius: 5px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.top-fix {
  margin-top: -310px;
}

.mg {
  margin-top: 10px;
}
.next-btn {
  background: #efefef;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  padding: 8px 15px;
}
.clear-btn {
  background: #6868681a;
  border: 1px solid #5a5a5a96;
  border-radius: 5px;
  padding: 8px 15px;
}
.submit-btn {
  background: #28a7452b;
  border: 1px solid #388e3cc9;
  border-radius: 5px;
  padding: 8px 15px;
}
</style>
