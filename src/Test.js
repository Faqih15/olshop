import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Test() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [text, settext] = useState("");
  const onchange = (e) => {
    settext(e.target.value);
  };
  const check = () => {
    console.log(text);
  };
  const checkHook = () => {
    console.log(getValues("testHook"));
  };

  const submit = (e) => {
    e.preventDefault();
    const { test } = e.target;
    const data = {
      test: test.value,
    };
    console.log(data);
  };
  const submitHook = (values) => {
    console.log(values);
  };
  console.log(errors);
  return (
    <>
      {/* {Object.entries(errors).map(([k, v], i) => (
        <div className="text-danger">
          {k} {v.type}
        </div>
      ))} */}
      <form onSubmit={submit}>
        <input name="test" onChange={onchange} />
        <button type="submit">simpan</button>
        <a className="btn btn-primary" onClick={check}>
          Check
        </a>
      </form>

      <form onSubmit={handleSubmit(submitHook)}>
        <input {...register("blog.title", { required: true })} />
        {errors.firstName?.type === "required" && <div clasName="text-center">First name is required</div>}
        <input
          {...register("kegiatan.title", {
            // required: true,
            // minLength: 10,
            // pattern: /^[A-Za-z]+$/i,
            // validate: (value) => {
            //   return value.length < 10 && "Minimal 10";
            // },
          })}
        />
        {errors && errors.testHook && (
          <div className="text-danger">{errors.testHook?.message}</div>
        )}
        <button type="submit">simpan</button>
        <a className="btn btn-primary" onClick={checkHook}>
          Check
        </a>
      </form>
    </>
  );
}
