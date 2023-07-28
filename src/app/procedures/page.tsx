import Image from "next/image";
import operation from "../images/alex-op2.jpeg";

export default function Procedures() {
  return (
    <>
      <div className="container mx-auto py-40">
        <h1 className="linethrough text-2xl text-center m-4">Our Procedures</h1>
        <p className="ml-4 p-4">
          At Bowen Pain Center, our unwavering dedication lies in assisting
          patients through a comprehensive interventional pain management
          program. Embracing the forefront of medical progress, we offer
          advanced diagnosis and treatment techniques to ensure the best
          possible outcomes.
        </p>
        <p className="ml-4 p-4">
          Our core mission at Bowen Pain Center is to relieve acute to chronic
          pain and foster improved health, comfort, and quality of life within a
          compassionate and collaborative environment. Through continuous
          research and innovative practices, we are committed to eradicting
          pain, all while working closely with each patient to provide the most
          suitable and personalized care.
        </p>
      </div>
      <section>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h1>
                    Epidural
                    <br />
                    Steroid
                    <br />
                    Injection
                  </h1>
                </div>
                <div className="card-back">
                  <p>
                    This injection procedure is conducted to alleviate neck,
                    shoulder, and arm pain resulting from nerve root compression
                    in the cervical spine. Various conditions, such as spinal
                    stenosis or herniated discs, can lead to inflammation and
                    swelling of the spinal nerves. The injected steroid
                    medication is effective in reducing the pain and swelling
                    associated with these conditions. Patients can typically
                    expect to experience relief within 3-7 days after the
                    procedure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h1>
                    Trigger
                    <br />
                    Point
                    <br />
                    Injection
                  </h1>
                </div>
                <div className="card-back">
                  <p>
                    This outpatient procedure is specifically intended to reduce
                    or alleviate pain caused by small tender knots that develop
                    in the muscles of the neck and back. The process is quick,
                    usually taking only a few minutes, and it is performed under
                    local anesthesia. A small needle is carefully inserted into
                    the knots and injected with a combination of local
                    anesthetic and steroid medication. The treatment is designed
                    to provide nearly instant relief, and its effectiveness can
                    last from several hours to weeks, depending on the use of
                    steroids. This allows patients to have a window of relief
                    during which they can engage in exercises and stretching
                    routines to help ease the tension and discomfort caused by
                    those muscle knots.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h1>
                    Medial
                    <br />
                    Branch
                    <br />
                    Block
                  </h1>
                </div>
                <div className="card-back">
                  <p>
                    This diagnostic procedure serves the purposes of identifying
                    a painful facet joint that might benefit from a
                    radiofrequency ablation. The facet joints in the spine allow
                    for bending, twisting, and flexing movements. If these
                    joints become arthritic or enlarged, they can cause pain.
                    Similar to a facet injection, a small needle is precisely
                    placed near the medial branch nerve with the guidance of
                    x-ray imaging. A small amount of local anesthetic is then
                    administered to numb the nerve. Following the injection,
                    patients are encouraged to resume their regular activities
                    and monitor their pain relief over the next 30 minutes to 2
                    hours. If the patient experiences significant relief from
                    the pain, they may be considered a suitable candidate for
                    the radiofrequency ablation procedure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h1>
                    Radiofrequency
                    <br />
                    Ablation
                  </h1>
                </div>
                <div className="card-back">
                  <p>
                    This is a minimally invasive procedure known as a
                    radiofrequency ablation or rhizotomy. The primary goal of
                    this procedure is to reduce or eliminate the pain caused by
                    damaged facet joints by disrupting the sensory nerves
                    responsible for carrying pain signals. Similar to facet
                    injections, a specialized needle is guided under x-ray to
                    the junction where the medial branch nerve is typically
                    located. The positioning of the needle is carefully tested
                    to ensure accuracy. Once confirmed, the nerve is numbed and
                    then heated for 90-120 seconds, effectively disrupting its
                    pain signaling. Optimal pain relief is usually achieved
                    within 2-4 weeks following the procedure. Radiofrequency
                    ablation can be performed under local anesthesia or
                    sedation, depending on the patient's preference and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h1>
                    Sacroiliac
                    <br />
                    Joint
                    <br />
                    Injection
                  </h1>
                </div>
                <div className="card-back">
                  <p>
                    Patients experiencing lower back or buttocks pain can find
                    relief through sacroiliac joint injections. The sacroiliac
                    joint (SIJ) is the area where the spine and hip come
                    together to form a joint space. Inflammation in this area
                    can lead to pain resulting from arthritis, trauma, or
                    various diseases. During the procedure, the patient lies on
                    their stomach with a comfortable pillow for support. Under
                    the guidance of fluoroscopy (x-ray), a small needle is
                    carefully directed into the joint. After confirming the
                    needle's position with a contrast dye, a mixture of local
                    anesthetic and steroid medication is injected in and around
                    the joint. Typically, patients experience relief within 1-3
                    days, and optimal pain relief is felt within 5-14 days after
                    the injection. This procedure can provide significant relief
                    to those suffering form sacroiliac joint-related pain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
