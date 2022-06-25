import { onValue, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

import { database } from "services";

const { Formik, Form, Field, FieldArray } = require("formik");

const types = {
  surfaceTypes: [
    { label: "چمن طبیعی", value: "naturalGrass" },
    { label: "چمن مصنوعی", value: "artificialGrass" },
    { label: "سالن", value: "court" },
  ],
  faciltyTypes: [
    { label: "پارکینگ", value: "parking" },
    { label: "اجاره توپ", value: "ball" },
    { label: "تلمبه", value: "pump" },
    { label: "سرویس بهداشتی ", value: "wc" },
    { label: "رختکن", value: "lockerRoom" },
    { label: "جایگاه تماشاچیان ", value: "audiencePlace" },
    { label: "بوفه", value: "buffet" },
    { label: "تهویه هوا", value: "airConditioning" },
    { label: "آب سرد کن", value: "waterCooler" },
  ],
};

const DataEntry = () => {
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // Add a new document in collection "cities"
      set(ref(database, "places/" + values.id), values)
        .then((res) => alert("با موفقیت ثبت شد"))
        .catch((error) => alert(error));

      setSubmitting(false);
    }, 300);
  };
  return (
    <Formik
      initialValues={{
        id: 0,
        name: "",
        address: "",
        rating: 0,
        surfaceType: "",
        sports: [],
        minPrice: 0,
        availableSlots: 0,
        imageSrcs: [],
        facilties: [],
      }}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form className="h-screen flex flex-col items-center md:justify-evenly gap-y-10 bg-slate-800 text-lg md:text-xl text-white">
          <div
            className="flex flex-col items-center text-xl font-bold py-6 md:p-0 mt-5 md:m-0"
            onClick={() => navigate("/")}
          >
            <h1>Varzeshgah Data Entry</h1>
            <h1>ورود داده ورزشگاه</h1>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 w-2/3 overflow-y-auto gap-4">
            <CustomField type="number" name="id" enLabel="Id" faLabel="شناسه" />
            <CustomField name="name" enLabel="Name" faLabel="نام" />
            <CustomField name="address" enLabel="Address" faLabel="آدرس" />
            <CustomField
              type="number"
              name="rating"
              enLabel="Rating"
              faLabel="امتیاز"
            />
            <CustomField
              name="surfaceType"
              enLabel="Surface Type"
              faLabel="نوع زمین"
              as="select"
            >
              <option value="" hidden>
                انتخاب نمایید
              </option>
              {types.surfaceTypes.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </CustomField>
            <CustomField
              type="number"
              name="minPrice"
              enLabel="Minimum Price"
              faLabel="حداقل قیمت"
            />
            <CustomField
              type="number"
              name="availableSlots"
              enLabel="Available Slots"
              faLabel="سانس موجود"
            />
            <FieldArray
              name="imageSrcs"
              render={(arrayHelper) => {
                return (
                  <div className="flex flex-col items-end">
                    <div className="w-full flex justify-between">
                      <label>لینک عکس ها</label>
                      <label>Image Links</label>
                    </div>
                    {values.imageSrcs.map((src, index) => (
                      <div
                        key={src + index}
                        className="w-full flex gap-x-2 pb-2"
                      >
                        <button
                          type="button"
                          className=" h-full aspect-square bg-red-500 rounded-full"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          -
                        </button>
                        <Field
                          className="w-full bg-slate-900 text-center"
                          name={`imageSrcs[${index}]`}
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      className="w-full bg-green-500 rounded-full"
                      onClick={() => arrayHelper.push("")}
                    >
                      +
                    </button>
                  </div>
                );
              }}
            />
            <FieldArray
              name="facilties"
              render={(arrayHelper) => {
                return (
                  <div className="flex flex-col items-end">
                    <div className="w-full flex justify-between">
                      <label>امکانات</label>
                      <label>Facilities</label>
                    </div>
                    {values.facilties.map((src, index) => (
                      <div
                        key={src + index}
                        className="w-full flex gap-x-2 pb-2"
                      >
                        <button
                          type="button"
                          className=" h-full aspect-square bg-red-500 rounded-full"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          -
                        </button>
                        <Field
                          className="w-full bg-slate-900 text-center"
                          name={`facilties[${index}]`}
                          as="select"
                        >
                          <option value="" hidden>
                            انتخاب نمایید
                          </option>
                          {types.faciltyTypes.map(({ label, value }) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </Field>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="w-full bg-green-500 rounded-full"
                      onClick={() => arrayHelper.push("")}
                    >
                      +
                    </button>
                  </div>
                );
              }}
            />
          </div>
          <div className="w-full md:w-2/3 md:text-left">
            <button
              type="submit"
              className={`w-full md:w-40 md:rounded-full ${
                isSubmitting ? "bg-blue-400" : "bg-green-500"
              } p-2 text-slate-800 text-xl font-extrabold`}
            >
              {isSubmitting ? "..." : "ثبت"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const CustomField = ({ name, enLabel, faLabel, ...props }) => (
  <div className="flex flex-col items-end">
    <div className="w-full flex justify-between">
      <label>{faLabel}</label>
      <label>{enLabel}</label>
    </div>
    <Field className="w-full bg-slate-900 text-center" name={name} {...props} />
  </div>
);

export default DataEntry;
