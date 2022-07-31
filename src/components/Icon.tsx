type Props = {
  className: string
  color: string
  size: string
}

const Icon = (props: Props) => {
  try {
    // 动态引入svg，相当于按需加载
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