const Icon = (props: any): any => {
  try {
    require(`icons/${props.className}.svg`);
  } catch (error) {
    throw new Error('not find ' + props.className + ' svg file');
  }
  return (
    <svg fill={props.color} width={props.size} height={props.size}>
      <use xlinkHref={'#' + props.className}/>
    </svg>
  );
};
export default Icon;