const Title = ({
  title,
  description,
  subTitle,
  titleClass,
  descriptionClass,
  append,
  wrapperClass,
  appendTitle,
}) => (
  <div className={`flex justify-center ${wrapperClass || ''}`}>
    <div>
      {appendTitle?.() || <h5 className={`text-black-100 ${titleClass || ''}`}>{title}</h5>}
      {subTitle?.() || (
        <p className={`${descriptionClass}`}>
          {description} {append ?? null}
        </p>
      )}
    </div>
  </div>
);

export default Title;
