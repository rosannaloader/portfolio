interface HomeButtonProps {
  title: string;
  color?: string;
  onClick?: () => void;
  className?: string;
}

function HomeButton({ title, color = "#FFC0CB", onClick, className }: HomeButtonProps) {
  const buttonStyle = {
    width: '170px',
    height: '170px',
    borderRadius: '50%',
    backgroundColor: color,
    border: 'none',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
}

export default HomeButton;