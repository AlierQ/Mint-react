type Props = {
  name: string
  color: string
  size: string
}

const Icon = (props: Props) => {
  try {
    // 动态引入svg，相当于按需加载
    require(`icons/${props.name}.svg`);
  } catch (error) {
    throw new Error('not find ' + props.name + ' svg file');
  }
  return (
    <svg fill={props.color} width={props.size} height={props.size}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};
export default Icon;