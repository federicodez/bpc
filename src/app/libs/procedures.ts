import { IframeHTMLAttributes } from "react";

type Procedure = Array<{
  title: string;
  content: string;
}>;

const procedures: Procedure = [
  {
    title: "Epidural Steroid Injection",
    content: `This injection procedure is conducted to alleviate neck, shoulder, and arm pain resulting from nerve root 
    compression in the cervical spine. Various conditions, such as spinal stenosis or herniated discs, can lead to inflammation 
    and swelling of the spinal nerves. The injected steroid medication is effective in reducing the pain and swelling associated 
    with these conditions. Patients can typically expect to experience relief within 3-7 days after the procedure.`,
  },
  {
    title: "Trigger Point Injection",
    content: `This outpatient procedure is specifically intended to reduce or alleviate pain caused by small tender knots 
    that develop in the muscles of the neck and back. The process is quick, usually taking only a few minutes, and it is 
    performed under local anesthesia. A small needle is carefully inserted into the knots and injected with a combination of 
    local anesthetic and steroid medication. The treatment is designed to provide nearly instant relief, and its effectiveness 
    can last from several hours to weeks, depending on the use of steroids. This allows patients to have a window of relief 
    during which they can engage in exercises and stretching routines to help ease the tension and discomfort caused by those 
    muscle knots.`,
  },
  {
    title: "Medial Branch Block",
    content: `This diagnostic procedure serves the purposes of identifying a painful facet joint that might benefit from a 
    radiofrequency ablation. The facet joints in the spine allow for bending, twisting, and flexing movements. If these joints 
    become arthritic or enlarged, they can cause pain. Similar to a facet injection, a small needle is precisely placed near 
    the medial branch nerve with the guidance of x-ray imaging. A small amount of local anesthetic is then administered to numb 
    the nerve. Following the injection, patients are encouraged to resume their regular activities and monitor their pain relief 
    over the next 30 minutes to 2 hours. If the patient experiences significant relief from the pain, they may be considered 
    a suitable candidate for the radiofrequency ablation procedure.`,
  },
  {
    title: "Radio Frequency Ablation",
    content: `This is a minimally invasive procedure known as a radiofrequency ablation or rhizotomy. The primary goal of 
    this procedure is to reduce or eliminate the pain caused by damaged facet joints by disrupting the sensory nerves 
    responsible for carrying pain signals. Similar to facet injections, a specialized needle is guided under x-ray to the 
    junction where the medial branch nerve is typically located. The positioning of the needle is carefully tested to ensure 
    accuracy. Once confirmed, the nerve is numbed and then heated for 90-120 seconds, effectively disrupting its pain signaling. 
    Optimal pain relief is usually achieved within 2-4 weeks following the procedure. Radiofrequency ablation can be performed 
    under local anesthesia or sedation, depending on the patient&apos;s preference and needs.`,
  },
  {
    title: "Sacroiliac Joint Injection",
    content: `Patients experiencing lower back or buttocks pain can find relief through sacroiliac joint injections. The 
    sacroiliac joint (SIJ) is the area where the spine and hip come together to form a joint space. Inflammation in this area 
    can lead to pain resulting from arthritis, trauma, or various diseases. During the procedure, the patient lies on their 
    stomach with a comfortable pillow for support. Under the guidance of fluoroscopy (x-ray), a small needle is carefully 
    directed into the joint. After confirming the needle&apos;s position with a contrast dye, a mixture of local anesthetic 
    and steroid medication is injected in and around the joint. Typically, patients experience relief within 1-3 days, and 
    optimal pain relief is felt within 5-14 days after the injection. This procedure can provide significant relief to those 
    suffering form sacroiliac joint-related pain.`,
  },
  {
    title: "Discectomies",
    content: "",
  },
];

export default procedures;
