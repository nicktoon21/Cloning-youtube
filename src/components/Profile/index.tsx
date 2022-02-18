type Props = {
  url: string;
  width: string,
  height: string,
}

export default function Profile({ url, width, height }: Props) {
  return <img
    style={{
      width: width,
      height: height,
      borderRadius: '50%',
    }}
    src={url}
    alt="profile" />
}
