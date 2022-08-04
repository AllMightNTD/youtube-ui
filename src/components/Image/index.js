export const Image = (props) => {
    const { alt, ...otherProps } = props;

    return <img alt={alt} {...otherProps} />;
};
